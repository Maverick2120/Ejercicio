import { Image, Button } from 'antd';
import React from 'react';

const Hola = () => {
  return(
  <div class="fondo">
    <div class="center">
      <div class="image">

        <Image
         preview={{ visible: false }}
         width={200}
         src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        />
  </div>      
        <div class="p">
          <p>PERFUME</p>
        </div>
          <div class="h2,h3">
            <h2>GABRIELLE ESSENCE EAU DE PARFUME</h2>
            <h3> A floral, solar and voluptuous 
            interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.  </h3>
            <div class="precio">
              <p1>$149.99</p1>
              <del>$169.99</del>
            </div>
            <div class="boton">
              <Button type="primary" size='large' >Add to Cart</Button>
            </div>
          </div>        
      </div>
    </div>
   
  );
};
 




export default Hola