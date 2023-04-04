const btnPlanting = document.querySelector('.button_planting');
const btnLawn = document.querySelector('.button_lawn');
const btnGardens = document.querySelector('.button_gardens');
const changeItem = document.querySelectorAll('.service-item');

for (let i = 0; i < changeItem.length; i++) {
    btnGardens.addEventListener('focus', () => {
        if(changeItem[i].classList.contains('service-item_lawn')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
        if(changeItem[i].classList.contains('service-item_planting')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
    });
    btnGardens.addEventListener('blur', () => {
        changeItem[i].classList.remove('service-item_blur');
    })
}

for (let i = 0; i < changeItem.length; i++) {
    btnLawn.addEventListener('focus', () => {
        if(changeItem[i].classList.contains('service-item_gardens')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
        if(changeItem[i].classList.contains('service-item_planting')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
    });
    btnLawn.addEventListener('blur', () => {
        changeItem[i].classList.remove('service-item_blur');
    })
}

for (let i = 0; i < changeItem.length; i++) {
    btnPlanting.addEventListener('focus', () => {
        if(changeItem[i].classList.contains('service-item_gardens')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
        if(changeItem[i].classList.contains('service-item_lawn')) {
            changeItem[i].classList.toggle('service-item_blur');
        }
    });
    btnPlanting.addEventListener('blur', () => {
        changeItem[i].classList.remove('service-item_blur');
    })
}



// for (let i = 0; i < changeItem.length; i++) {
//     btnGardens.addEventListener('focus', () => {
//         if(changeItem[i].classList.contains('service-item_lawn')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//         if(changeItem[i].classList.contains('service-item_planting')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//     });
//     btnGardens.addEventListener('blur', () => {
//         changeItem[i].classList.remove('service-item_blur');
//     })
// }

// for (let i = 0; i < changeItem.length; i++) {
//     btnLawn.addEventListener('focus', () => {
//         if(changeItem[i].classList.contains('service-item_gardens')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//         if(changeItem[i].classList.contains('service-item_planting')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//     });
//     btnLawn.addEventListener('blur', () => {
//         changeItem[i].classList.remove('service-item_blur');
//     })
// }

// for (let i = 0; i < changeItem.length; i++) {
//     btnPlanting.addEventListener('focus', () => {
//         if(changeItem[i].classList.contains('service-item_gardens')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//         if(changeItem[i].classList.contains('service-item_lawn')) {
//             changeItem[i].classList.toggle('service-item_blur');
//         }
//     });
//     btnPlanting.addEventListener('blur', () => {
//         changeItem[i].classList.remove('service-item_blur');
//     })
// }


// categoriesButtons.forEach((button) => {
//     allButtons.push(button.id); // Записываем в справочник все найденные
//     button.addEventListener('click', (event) => {
//       // Добавляем или удаляем кнопку
//       if (selectButtons.includes(event.target.id)) {
//         selectButtons.splice(selectButtons.indexOf(event.target.id), 1)
//       } else {
//         selectButtons.push(event.target.id)
//       }
  
//       if (event.target.id === 'gardens') {
//         button.classList.toggle('button--active');
//       }
//       else if (event.target.id === 'lawn') {
//         button.classList.toggle('button--active');
  
//       } else if (event.target.id === 'planting') {
//         button.classList.toggle('button--active');
//       }
//       // Проверяем, если нажато 2, то оставшейся добавляем стиль
//       if (selectButtons.length === 2) {
//         disabledButton = allButtons.filter(it => !selectButtons.includes(it))[0];
//         document.getElementById(disabledButton).classList.add('button--disabled');
//       } else if (disabledButton) { // Иначе стиль удаляем
//         document.getElementById(disabledButton)?.classList.remove('button--disabled');
//         disabledButton = '';
//       }
//     })
//   })