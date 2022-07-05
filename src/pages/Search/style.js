import styled from 'styled-components'

export const Wrapper = styled.div`
.header{
    margin-top: 0.5rem;
  .headersearch {
    /* display: flex; */
    position: relative;
    width: 13.5rem;
    height: 2rem;
    margin-left: 2.5rem;
    margin-right: 2rem;
    i{
      position: absolute;
      top:-0.1rem;
      left: -2rem;
    }
    h3{
    position: absolute;
    top:0.3rem;
    right: -2rem;
    color: red;
   }
  .icon{
    position: absolute;
    top:0.4rem;
    right: 0.2rem;
  }
  }
  .search_history{
    height: 5rem;
    border-bottom: 1px solid #f7f7f7;
  } 
  
 
}
.huanghuang{
    position: relative;
    margin-top: 0.25rem;
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
      border-bottom: 1px solid #f7f7f7;
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

