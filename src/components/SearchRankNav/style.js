import styled from 'styled-components'

export const Wrapper = styled.div`
.navbar{
    height: 35px;
    background:#fff;
    /* border-bottom: 1px solid #ccc; */
    .nav-box{
        margin-top: 0.5rem;
        height: 35px!important;
        line-height: 35px!important;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 550;
        color: #666;
        /* border-bottom: 1px solid #ebebeb; */
        margin-left: 1rem;
        /* &.active::after
        {
            content: "";
            background-color: rgb(35, 149, 255);
            background-color: red;
            width:2rem;
            height: 0.03rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            color: #e23d43;
             color: white;
        } */
        &.active{
            font-weight: bold;
            color:red;
        }
        
    }
}
`