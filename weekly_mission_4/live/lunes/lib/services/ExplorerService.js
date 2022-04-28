class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorerFilterByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorerFilterByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {

        const explorersAmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);

        return explorersAmountOfExplorersByMission

    }

    static getExplorersUsernamesByMission(explorers, mission) {

        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

        return usernamesInNode
    }


}

module.exports = ExplorerService