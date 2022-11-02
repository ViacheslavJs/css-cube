
'use strict'

const cols = document.getElementsByClassName('square');
//console.log(cols);

//const button = document.querySelector('button');
//button.addEventListener('click', backlightEnableDisable);

document.addEventListener('click', (event) => {
  const element = event.target.tagName;
  
  if ( event.target.tagName.toLowerCase() === 'button' 
    || event.target.tagName.toLowerCase() === 'span' ) { 
       
    const node = event.target.tagName.toLowerCase() === 'span'
      ? event.target
      : event.target.children[0];
       
    //console.log( element.toLowerCase() ); 
    
    node.classList.toggle('inactive');
    node.classList.toggle('active');  
    
    backlightEnable()
    
    const isInactive = node.classList.contains('inactive'); 
    //console.log(isInactive);
    
    if ( isInactive ) {
      backlightDisable(); 
      //console.log(isInactive);
    }
    
  } 
    
});

function backlightEnable() {
  for ( let i = 0; i < cols.length; i++ ) { 
    cols[i].classList.add('backlight-on'); 
    //console.log(cols);
  }
}

function backlightDisable() {
  for ( let i = 0; i < cols.length; i++ ) { 
    cols[i].classList.remove('backlight-on'); 
    //console.log(cols);
  }
}


