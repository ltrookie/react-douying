import styled from 'styled-components'

export const Wrapper = styled.div`
    .content{
       margin: 1rem  auto auto auto;
       width: 16rem;
       height: 40rem;
       border-radius: 1rem;
       background-color: #fff4f2;
     border-bottom: 1px solid #f7f7f7;
      .text{ 
      display: flex;
      margin-top: 1rem;
      flex-wrap: wrap;

     ol{
      /* display: flex; */
      /* margin-top: 1rem; */
      /* border-bottom: 1px solid #f7f7f7; */
      flex-wrap: wrap;
      li{
         
         height:2rem;
         padding: 1rem 2rem ;
        a{   
        position: relative;
         font-size: medium;
         font-weight: 520;
         color: black;
         .hot{
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          background-color:#fa2a60;
          font-size: 0.5rem;
          left:10rem;
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
          left:10rem;
          top:0.1rem;
          color:white ;
          text-align: center;
          
        }
        p{
        position: relative;
        left:11rem;
        top:-0.9rem;
        font-size:0.5rem
       
      }
      }

      
      }
     
    }
    
    }

   
  }
`