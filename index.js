
let dragImg = 'https://www.placecage.com/c/180/80';

let droppable = $('.droppable');
let img1 = $('#img1');

let drag = e => {
  e.originalEvent.dataTransfer.setData('text', e.target.id);
};

img1.on('dragstart', e => {
  drag(e);
});

let allowDrop = e => {
  e.preventDefault();
};

droppable.on('dragover', e => {
  allowDrop(e);
});

let drop = e => {
  e.preventDefault();
  let data = e.originalEvent.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
};

droppable.on('drop', e => {
  drop(e);
});
