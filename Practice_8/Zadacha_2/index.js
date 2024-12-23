const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

const filterAndSortUsers = (users) => {
    const filteredUsers = users.filter(user => user[1] > 25 && user[2] === true);

    const sortedUsers = filteredUsers.sort((a, b) => a[1] - b[1]);

    const sportUsersOver25 = sortedUsers.map(user => user[0]);

    return sportUsersOver25;
};

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25);
