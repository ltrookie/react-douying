import styled from 'styled-components'

export const Wrapper = styled.div`
 
   .video_bottom{  
    width: 100%;
    height:3rem;
    background: black;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {  
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color:#989898;
        &.active{
            color:white;
        } 
        span{
            font-size:0.8rem;
            font-weight:600;
           }
        i{
            font-size:1rem;
        }
        }
 
}

  
`