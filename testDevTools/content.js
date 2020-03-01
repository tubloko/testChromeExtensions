const input = document.querySelectorAll('input[type="text"],textarea');

const changeText = (changedItem, item) => {
    const regExp = changedItem === 'Cat' ? /Cat/g : changedItem === 'Helo' ? /Helo/g : /heldp/g;

    replaceTextNodes(document.body);
    function replaceTextNodes(node ) {
        node.childNodes.forEach((el) => {
            if (el.nodeType === 3) {
                if (el.nodeValue.trim() !== "") {
                    el.nodeValue = el.nodeValue.replace(regExp, item);
                }
            } else {
                replaceTextNodes(el);
            }
        });
    }
};

const createLi = () => {
    const li = document.createElement('li');
    li.style.backgroundColor = 'black';
    li.style.marginBottom = '10px';
    li.style.fontSize = '24px';
    li.style.color = 'white';

    return li;
};

const ul = document.createElement('ul');
ul.style.width = '200px';
ul.style.zIndex = '10000';
ul.className = 'modal';

const li1 = createLi();
const li2 = createLi();
const li3 = createLi();

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

const createModal = ({ item1, item2, item3, replaced, node }) => {
    const symbol = node.value[node.value.length - 1];
    const regExp = /Cat.$|Helo.$|heldp.$/;

    li1.innerHTML = item1;
    li1.onclick = () => {
        changeText(replaced, item1);
        return node.value = node.value
            .replace(regExp, item1 + symbol);
    };

    li2.innerHTML = item2;
    li2.onclick = () => {
        changeText(replaced, item2);
        return node.value = node.value
            .replace(regExp, item2 + symbol);
    };

    li3.innerHTML = item3;
    li3.onclick = () => {
        changeText(replaced, item3);
        return node.value = node.value
            .replace(regExp, item3 + symbol);
    };
};

const invisibleModal = () => {
    document.body.onclick = (e) => {
        document.querySelector('.modal').style.display = 'none';
    };
};

function changeInput () {
    input.forEach(a => {
        a.addEventListener('input', () => {
            const str = a.value;
            if (/test Cat.$/.test(str)) {
                ul.style.display = 'block';
                createModal({
                    item1: 'Dog',
                    item2: 'Rat',
                    item3: 'bat',
                    replaced: 'Cat',
                    node: a,
                });
                a.after(ul);

                invisibleModal();
            }
            if (/test Helo.$/.test(str)) {
                ul.style.display = 'block';
                createModal({
                    item1: 'hello',
                    item2: 'Help',
                    item3: 'Hell',
                    replaced: 'Helo',
                    node: a,
                });
                a.after(ul);

                invisibleModal();
            }
            if (/test heldp.$/.test(str)) {
                ul.style.display = 'block';
                createModal({
                    item1: 'help',
                    item2: 'held',
                    item3: 'hello',
                    replaced: 'heldp',
                    node: a,
                });
                a.after(ul);

                invisibleModal();
            }
        });
    });
}
changeInput();