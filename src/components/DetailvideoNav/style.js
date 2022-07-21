import styled from 'styled-components'

export const ShowplayerWrapper = styled.div`
    margin: 0;
   
    .playshow{
        display: flex;
        flex-wrap: wrap;
       
   
    .play{
        /* display: flex; */
        /* flex: 1; */
       position: relative;
        height: 8rem;
        width: 6.2rem;
        background-color: black;
        margin-right: 1px;
        margin-bottom: 1px;
        i{
            position:absolute ;
            bottom: 0.5rem;
            left: 0.5rem;
            color: #fdfdfd;
            font-size: 0.5rem;
        }
        video{
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
}
   p{
    margin-top: 1rem;
    text-align: center;
   }

   .lock{
    position: relative;
    margin-top: 50%;
    text-align: center;
    .littlelock{
        position: absolute;
        top: -11rem;
        right:0.5rem;
     

    }
    
    .circle{
        display: flex;
        width: 4rem;
        height: 4rem;
        border-radius: 3rem;
        background-color: #f3f3f3;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: space-around;
        margin-left: 40%;

    }
    h2{
        color: #000000;
        font-weight: 550;
    }
    p{
        margin-top: 0.5rem;
    }
   }
`