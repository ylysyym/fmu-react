import { PostData } from "../redux/modules/data"

enum VoteKeyword {
    VOTE = "vote",
    UNVOTE = "unvote"
}

enum VoteType {
    UNVOTE = 1,
    VOTE = 2,
    UNVOTE_AND_VOTE = 3
}

interface Vote {
    type: VoteType,
    user: string
    target: string,
    post: number
}

export function parsePageDataToVotes(pageData: { [page: number]: PostData }) {
    let combinedPageData: PostData[] = [];
    for (let x in pageData) {
        combinedPageData = combinedPageData.concat(pageData[x]);
    }

    let result: Vote[] = [];
    for (let voteCandidate of combinedPageData) {
        let voteType: VoteType;
        let voteString: string = voteCandidate.content.toLowerCase();
        let voteTarget: string = "";
        if (voteString.includes(VoteKeyword.UNVOTE)) {
            if (voteString.replace("/" + VoteKeyword.UNVOTE + "/g", "").includes(VoteKeyword.VOTE)) {
                if (voteString.split(VoteKeyword.UNVOTE).pop().length < voteString.split(VoteKeyword.VOTE).pop().length) {
                    voteType = VoteType.UNVOTE_AND_VOTE;
                } else {
                    // Vote and unvote, aka unvote
                    voteType = VoteType.UNVOTE;
                }
            } else {
                voteType = VoteType.UNVOTE;
            }
        } else if (voteString.includes(VoteKeyword.VOTE)) {
            voteType = VoteType.VOTE;
            voteTarget = voteString.split(VoteKeyword.VOTE).pop().trim();
        } else {
            // Not a vote or unvote
            continue;
        }

        result.push({
            user: voteCandidate.user,
            type: voteType,
            target: voteTarget,
            post: voteCandidate.post
        });
    }
    result.sort((a: Vote, b: Vote) => {
        return a.post - b.post;
    });
    return result;
}

export function getCurrentVoteTally(votes: Vote[], a: number, b: number) {
    let voteMap: any = {};
    let alreadyVoted: any = {};
    for (let vote of votes) {
        if (vote.post < a) {
            continue;
        }
        if (vote.post > b) {
            break;
        }
        if (!(vote.target in voteMap)) {
            voteMap[vote.target] = [];
        }
        if (vote.type == VoteType.UNVOTE) {
            if (vote.user in alreadyVoted) {
                voteMap[alreadyVoted[vote.user]] = voteMap[alreadyVoted[vote.user]].filter((voter: any) => voter.user !== vote.user);
            }
            delete alreadyVoted[vote.user];
        } else {
            if (vote.user in alreadyVoted) {
                voteMap[alreadyVoted[vote.user]] = voteMap[alreadyVoted[vote.user]].filter((voter: any) => voter.user !== vote.user);
            }
            alreadyVoted[vote.user] = vote.target;
            voteMap[vote.target].push({
                user: vote.user,
                post: vote.post
            });
        }
    }
    let sortedTally = [];
    for (let voteTarget in voteMap) {
        sortedTally.push({
            target: voteTarget,
            voters: voteMap[voteTarget]
        });
    }
    sortedTally.sort((a: any, b: any) => {
        return b.voters.length - a.voters.length;
    });
    return sortedTally;
}