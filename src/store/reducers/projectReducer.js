const initState = {
    projects: [
        { id: 1, title: 'Apocalypse', content: 'lorem' },
        { id: 2, title: 'MDK', content: 'lorem' },
        { id: 3, title: 'Duke Nukem', content: 'lorem' },
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;