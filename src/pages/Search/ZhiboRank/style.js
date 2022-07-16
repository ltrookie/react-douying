import styled from 'styled-components'

export const Wrapper = styled.div`
    .content{
       margin: 0.5rem  auto auto auto;
       width: 17rem;
       height: 40rem;
       border-radius: 0.3rem;
       background-color: #fff4f2;
     border-bottom: 1px solid #f7f7f7;
      .text{ 
      display: flex;
      flex-wrap: wrap;

     ol{
      flex-wrap: wrap;
      li{         
         height:2rem;
         padding: 1rem 2rem ;
        a{   
        position: relative;
         font-size: 0.8rem;
         font-weight: 550;
         color: black;
         .hot{
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          background-color:#fa2a60;
          font-size: 0.5rem;
          left:11.5rem;
          top:0.1rem;
          color: white;
          text-align: center;
          
        }
        .last{
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          background-color: purple;
          font-size: 0.5rem;
          left:11.5rem;
          top:0.1rem;
          color:white ;
          text-align: center;
          
        }
        p{
        position: relative;
        left:12.5rem;
        top:-0.9rem;
        font-size:0.1rem;
        color: #756969;
        width: 2.5rem;
       
      }
      }

      
      }
     
    }
    
    }

   
  }
`