import styled from 'styled-components'

export const Wrapper = styled.div`

.search_history{
    height: 5rem;
    border-bottom: 1px solid #dddddf;
    /* display: none; */
    .history_text{

      ul{
        margin-top: 1.5rem;
        li{
          position: relative;
        display: flex;
        margin-top: 0.8rem;
        align-items: center;
        
        .ClockCircleOutline {
          margin-left: 0.5rem;
        }
        .CloseOutline{
         position: absolute;
         right: 0.5rem;
        }
        p{
          margin-left: 1rem;
          margin-top: 1px;
          font-size: 0.75rem;
          /* font-weight: 550; */
          color: #000000;
        }
      }
    }
      
    }
    p{   margin-top: 0.8rem;
         text-align: center;
      }
  } 
.huanghuang{
    position: relative;
    margin-top: 0.5rem;
    h3{
        position: absolute;
        top:0.5rem;
        margin-left: 1rem;
        color:black;
        font-weight: 700;
        
    }
    h4{
        /* position: absolute; */
        padding-left: 16rem;
        padding-top: 0.5rem;
        
    }
    i{
      position: absolute;
      top:0.8rem;
      right:3.2rem;
    }
     .wantsearch{
      display: flex;
      margin-top: 1rem;
      border-bottom: 1px solid #dddddf;
      flex-wrap: wrap;
      
     a{
      height: 2rem;

      p{
        flex: 1;
        display: flex;
        width: 9rem;
        flex-direction: column;
        align-items:left;
        justify-content: space-around;
        font-size: 0.8rem;
        padding-left: 1rem;
        font-weight: 550;
        
        
     }
    
      }
      a:nth-child(-n+2) {
      color: red;
      /* font-size: 0.8rem; */
      font-weight:500;
    }

  }
  }

 

`
export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
`
