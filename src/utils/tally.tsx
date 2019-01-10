import { PostData } from "../redux/modules/data"

enum VoteKeyword {
    VOTE = "vote",
    UNVOTE = "unvote"
}

enum VoteType {
    UNVOTE = 1,
    VOTE = 2
}

interface Vote {
    type: VoteType,
    user: string,
    target: string,
    postNumber: number
}

interface DetailedTally {
    [voteTarget: string]: {

    }
}

export function convertPageDataToVotes(pageData: { [page: number]: PostData }): Vote[] {
    let combinedPageData: PostData[] = [];
    for (let page in pageData) {
        combinedPageData = combinedPageData.concat(pageData[page]);
    }

    let result: Vote[] = [];
    for (const item of combinedPageData) {
        const line: string = item.content.toLowerCase();
        if (containsUnvote(line)) {
            result.push({
                user: item.user,
                type: VoteType.UNVOTE,
                target: null,
                postNumber: item.postNumber
            });
        }
        if (containsVote(line)) {
            result.push({
                user: item.user,
                type: VoteType.VOTE,
                target: getVoteTarget(line),
                postNumber: item.postNumber
            });
        }
    }

    result.sort((a: Vote, b: Vote) => {
        return a.postNumber - b.postNumber;
    });
    return result;
}

function getVoteTarget(line: string): string {
    return line.split(VoteKeyword.VOTE).pop().replace(/^[:.\s]+|[:.\s]+$/g, "");
}

// Votes that come before an unvote do not count
function containsVote(line: string): boolean {
    return line.split(VoteKeyword.UNVOTE).pop().includes(VoteKeyword.VOTE) && !isPartOfTally(line);
}

function isPartOfTally(line: string): boolean {
    return /^no vote \([0-9]{1,3}\)$/.test(line);
}

function containsUnvote(line: string): boolean {
    return line.includes(VoteKeyword.UNVOTE);
}

export function getCurrentVoteTally(votes: Vote[], a: number, b: number) {
    let tallyContainer = {};
    let voteRecord: any = {};
    let latestVote: any = {};
    for (let vote of votes) {
        if (vote.postNumber < a) {
            continue;
        }
        if (vote.postNumber > b) {
            break;
        }

        if (!(vote.user in latestVote)) {
            if (vote.type === VoteType.UNVOTE) {
                continue;
            }
        }

        if (vote.target === latestVote[vote.user]) {
            // Vote did not change
            continue;
        }

        if (vote.user in latestVote) {
            let previousVote = latestVote[vote.user];
            let recentRecord = voteRecord[previousVote][vote.user].pop();
            if (recentRecord) {
                recentRecord.end = vote.postNumber;
                voteRecord[previousVote][vote.user].push(recentRecord);
            }
            delete latestVote[vote.user];
        }

        if (vote.type === VoteType.VOTE) {
            if (!(vote.target in voteRecord)) {
                voteRecord[vote.target] = {
                    [vote.user]: []
                };
            } else if (!(vote.user in voteRecord[vote.target])) {
                voteRecord[vote.target][vote.user] = [];
            }
            latestVote[vote.user] = vote.target;
            voteRecord[vote.target][vote.user].push({
                start: vote.postNumber
            });
        }
    }

    let sortedTally = [];
    for (let voteTarget in voteRecord) {
        let voters = [];
        let voteCount: number = 0;
        for (let voter in voteRecord[voteTarget]) {
            voters.push({
                user: voter,
                times: voteRecord[voteTarget][voter]
            });
            if (!voteRecord[voteTarget][voter][voteRecord[voteTarget][voter].length - 1]["end"]) {
                voteCount++;
            }
        }
        voters.sort((a, b) => {
            return a.times[a.times.length - 1].start - b.times[b.times.length - 1].start;
        });
        sortedTally.push({
            target: voteTarget,
            voters: voters,
            voteCount: voteCount
        });
    }
    sortedTally.sort((a: any, b: any) => {
        return b.voteCount - a.voteCount;
    });
    return sortedTally;
}