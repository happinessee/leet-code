/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    if (directions.indexOf('L') === -1 || directions.indexOf('R') === -1) return healths;
    
    const robots = createRobotObjects(positions, healths, directions);
    robots.sort((a, b) => a.position - b.position);

    const output = [];
    const stack = [];
    for (robot of robots) {
        if (robot.direction === 'R') stack.push(robot);
        else if (robot.direction === 'L') {
            if (stack.length === 0) output.push(robot);
            else {
                while(stack.length !== 0) {
                    const nearestRobot = stack.pop();
                    const 로봇대전결과 = 로봇대전(nearestRobot, robot);
                    if (로봇대전결과 === BattleResult.WIN) {
                        nearestRobot.health--;
                        stack.push(nearestRobot);
                        break;
                    } else if (로봇대전결과 === BattleResult.LOSE) {
                        robot.health--;
                    } else {
                        robot.health = 0;
                        break;
                    }
                }
                if (stack.length === 0 && robot.health !== 0) output.push(robot);
            }
        }
    }

    const mergedRobots = [...output, ...stack];
    mergedRobots.sort((a, b) => a.index - b.index);
    return mergedRobots.map(robot => robot.health);
};

const createRobotObjects = (positions, healths, directions) => {
    const robotPositionArray = [];
    for (let i = 0; i < positions.length; ++i) {
        robotPositionArray.push({"position": positions[i], "health": healths[i], "direction": directions[i], "index": i});
    }

    return robotPositionArray;
};

const 로봇대전 = (robot1, robot2) => {
    if (robot1.health > robot2.health) {
        return BattleResult.WIN;
    } else if (robot1.health < robot2.health) {
        return BattleResult.LOSE
    }
    return BattleResult.EQUAL;
}

const BattleResult = {
    WIN: "win",
    LOSE: "lose",
    EQUAL: "equal"
}