window.onload = function () {
    const render_result = (data, container) => {
        const userinfo_elem = document.createElement('div');
        userinfo_elem.id = 'userinfo';
        // userinfo_elem.textContent = data.title;
        const html = data.map(el => `${el.id} ${el.title} <br/>`).join('');
        userinfo_elem.innerHTML = html;
        container.append(userinfo_elem);
    };
    const test = document.querySelector('.test__preloader');
    test.classList.add('loaded');
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => json.filter(el => el.id > 100))
        .then(json => {
            console.log('res: ', json);
            test.classList.remove('loaded');
            render_result(json, test);
        })
        .catch(error => {
            alert(`Something went wrong: ${error}`)
            console.error('Something went wrong', error);
        })
   
    }, 800)
    
}