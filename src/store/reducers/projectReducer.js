const initState = {
    projects: [
        {id: '1', title: 'Delphi Mobile', content: 'bla bla bla bla'},
        {id: '2', title: 'Delphi Client', content: 'bla bla bla bla'},
        {id: '3', title: 'ISIPP', content: 'bla bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT': 
        console.log('created project', action.project);  
    }
    return state
}

export default projectReducer;