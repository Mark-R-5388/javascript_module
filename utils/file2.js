export const showClients = (clients) => {
    const client = clients.map((people) => {
        const { name, experience} = people;
        return `<p>${name} <strong>${experience}</strong></p>`;
})
    .join('');
    return client;
}

export const showPrograms = (programs) => {
    const programType = programs.map((training) => {
        const {name,type} = training;
        return `<p>${name} <strong>${type}</strong></p>`
    }).join('');
    return programType;
}

