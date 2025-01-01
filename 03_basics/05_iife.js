// Immediately Invoked Function Expression  (IIFE)

// Named IIFE
( function Tea(){
    console.log(`DB connected`);
    
})();

( (name) => {
    console.log(`DB connected Welcome ${name}`);
    
})("Vishal")