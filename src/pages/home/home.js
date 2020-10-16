import React,{Component} from 'react';
import './home.css'
import girl from '../../img/homegirl.jpg';
import river from '../../img/homeriver.jpg';
import sun from '../../img/homesun.jpg';
import couple from '../../img/homecouple.jpg';
import brilho from '../../img/homebrilho.jpg';
import casamento from '../../img/homecasamento.jpg';
import children from '../../img/homechildren.jpg';
import child from '../../img/homechild.jpg';


class Home extends Component {
    render() {
        return (
        <div className='home pb-5'>
            <p className='titulo fonte'>My Portfolio</p>

            <div className='row'>
                <div className='col-3'>
                    <img className='foto' src={girl}></img>
                </div>
                <div className='col-3'>
                    <img className='foto' src={river}></img>
                </div>

                <div className='col-3'>
                    <img className='foto' src={sun}></img>
                </div>

                <div className='col-3'>
                    <img className='foto' src={couple}></img>
                </div>
            </div>

                <div className='container'>
                <div className='row mt-5'>
                <div className='col-5 text-center borda texto2 ml-5 mr-5'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p> Meu maior objetivo é fotografar e encantar, preservando memórias e principalmente, fazendo com o que todos sintam grande emoção, 
                        sempre que verem tais registros</p>
                </div>
                <div className='col-5 text-center borda ml-5'>
                    <br></br>
                    <p className='texto'>“A fotografia é uma maneira de sentir, de tocar, de amar. O que você capturou no filme é capturado para sempre ... Lembra-se de pequenas coisas, muito depois que você já esqueceu tudo. ”</p>
                    <p className='texto2'> - Aaron Siskind</p>
                </div>
                </div>

                    
                
                <div className='row mt-5'>
                    
                <div className='col-3'>
                    <img className='mr-5 foto2' src={children}></img>
                </div>
                <div className='col-3'>
                    <img className=' mr-5 foto2' src={casamento}></img>
                </div>
                <div className='col-3'>
                    <img className='mr-5 foto2' src={brilho}></img>
                </div>

                <div className='col-3'>
                    <img className='mr-5 foto2' src={child}></img>
                </div>

                </div>

            </div>


                                     
           
        </div>

        );
    }
}


export default Home;