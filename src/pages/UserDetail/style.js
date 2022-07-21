import styled from "styled-components";

export const Wrapper = styled.div`

transform-origin: right bottom;
    /* position: relative; */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .back_picture{
        position: relative;
        background-color: black;
        height: 6.5rem;
        i{
            margin-top: 1rem;
            margin-left: 1rem;
            color: #dfdfdf;
        }
        .right{
            position: absolute;
            top:0.4rem ;
            right: 0.5rem;
            i{
                margin-right: 0.5rem;
            }
        }
       
    }

    .detail_header{
     
         position: relative;
         border-bottom: 1px solid #dddddf;
         height: 7rem;


    .topbar{
           
            display: flex;
           
        .topbar_information{ 
            flex: 1;
            display: flex;
            margin-top: 0.3rem;
            flex-direction: column;
            align-items: center;    
            border-right: 1px solid #dddddf;
            color: #78787a;
            .picture{
           border: 0.2rem solid white;
           position: absolute;
           top:-0.8rem;
           left: 0.5rem;
          }
            .number{
                color: black;
                font-weight: 550;
                font-size: medium;
            }
          }  
        .topbar_information:first-child{
            border:none;
        }
         
         }
    .username{
        margin-top: 1.8rem;
        h2{
            color: black;
            font-weight: 550;
            margin-left: 0.8rem;
            font-size: 1rem;
        }
        p{
            margin-top: 0.3rem;
            margin-left: 0.8rem;
            font-size: 1px;
            color: #121214;
        }
    } 
       
      
    }
      .detail_container{
        position: relative;
        /* height: 7rem; */
        .description{
            margin-top: 0.5rem;
            margin-left: 0.8rem;
            font-size: 0.7rem;
            font-weight: 500;
            color: black;
        }
        p{
            margin-top: 0.2rem;
            margin-left: 0.8rem;
            font-size: 0.7rem;
            color: #78787a;

        }
        
            .guanzhu {
           
            width: 80%;
            height: 1.6rem;
            margin-top: 1rem;
            margin-left: 0.8rem;
            background-color:#fc2b55 ;
            border:none;
            font-size: 0.7rem;
            color:#fefffd;
            text-align: center;
            align-items: 2rem;
            border-radius: 0.1rem;
            }
            .Guanzhu{
                 .yiguanzhu{
            width: 40%;
            height: 1.6rem;
            margin-top: 1rem;
            margin-left: 0.8rem;
            background-color:#f3f3f3 ;
            border:none;
            font-size: 0.7rem;
            color:#14131d;
            text-align: center;
            align-items: 2rem;
            border-radius: 0.1rem;
            }
            .sixing{
            width: 40%;
            height: 1.6rem;
            margin-top: 1rem;
            margin-left: 0.2rem;
            background-color:#f3f3f3 ;
            font-size: 0.7rem;
            color:#14131d;
            align-items: 2rem;
            border-radius: 0.1rem;
            border:none;

            }
            i {
                position: absolute;
                bottom:0.4rem;
                left:6rem;
            }
            }
           
        .interest{
           position: absolute;
           right: 0.7rem;
           bottom: 0;
           width: 1.6rem;
           height: 1.6rem;
           /* margin-top: 1rem; */
           background-color: #f3f3f3;
           border-radius: 0.1rem;
           border: none;
           i {
            position: absolute;
            bottom: 0.45rem;
            right:0.6rem;
            color:#14131d;
           }
      

        }
          .lock{
            position: absolute;
            right: 2.9rem  ;
            bottom:-1.3rem;
         }
    }
  
    .maybelike{
        margin-top: 1rem;
        height: 10rem;
        width: 100%;
        background-color: #fdfdfd;
        p{
            margin-left: 0.8rem;
            
        }
        
    }


`

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 15%;
    width: 100%;
    height: 100%;
    margin: auto;
    
`