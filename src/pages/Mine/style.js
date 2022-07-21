import styled from "styled-components";

export const Wrapper = styled.div`
     height: 100%;
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
            font-size: 0.4rem;
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
            color: #78787a;

        }
        
        
          
            .edit_data{
            width: 45%;
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
            .addfriend{
            width: 45%;
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
            
    
       
       
            
        
    }
    .photo{
    position: relative;
    margin-top: 10%;
    text-align: center;
    /* .littlelock{
        position: absolute;
        top: -11rem;
        right:0.5rem;
     

    } */
    
    .circle{
        display: flex;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        background-color: #f3f3f3;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: space-around;
        margin-left: 42%;

    }
    h3{
        color: #000000;
        font-weight: 550;
    }
    p{
        margin-top: 0.5rem;
    }
   }
   .shoucangempty{
    margin-top: 10%;
    text-align: center;
    h4{
        color: #000000;
    }
    p{
        margin-top: 0.5rem;
    }
   }
    

`