<template>
    <div id="usefulList" class="list">
        <div class="header">
            <p>Useful Regexes</p>
            <input type="checkbox" id="useful-btn01" class="more-btn">
            <label for="useful-btn01">
                <span class="dot"></span>
            </label>
        </div>
        <div class="content">
            <div class="list-item">
                <p class="list-title">메일 주소 정규식</p>
                <!-- <p class="regex">/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/</p> -->
            </div>
            <div class="list-item">

            </div>
            <div class="list-item">

            </div>
            <div class="list-item">

            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'usefulList'
}
</script>
<style scoped>
    .list{
        width: 400px;
        height: 500px;
        box-shadow: 2px 2px 15px lightgray;
        border-radius: 5px;
        overflow: hidden;
    }
    .list > .header{
        width: 100%;
        height: 50px;
        background-color: rgba(33,150,243,1.0);
        color: white;
        
        position: relative;
    }
    .list > .header > p{
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 50px;
    }

    #useful-btn01{
        display: none;
    }
    #useful-btn01 + label[for=useful-btn01]{
        position: absolute;
        right: 0;
        top:0;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
    label > span.dot, label > span.dot::before, label > span.dot::after{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 5px;
        height: 5px;
        background-color: white;
        border-radius: 100%;
    }
    label > span.dot{}
    label > span.dot::before{
        content: '';
        top: -16px;
    }
    label > span.dot::after{
        content: '';
        bottom: -16px;
    }
    .list > .content{
        width: 100%;
        height: 400px;
        background-color: #f6faff;
    }
    .content > .list-item:first-child{
        margin-top: 10px;
    }
    .content > .list-item::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        width: 6px;
        height: 100%;
    }
    .content > .list-item:first-child::before{
        background-color: gold;
    }
    .content > .list-item:nth-child(2)::before{
        background-color: silver;
    }
    .content > .list-item:nth-child(3)::before{
        background-color: #cd7f32;
    }
    .content > .list-item{
        position: relative;
        width: 95%;
        height: 70px;
        margin: auto;
        margin-bottom: 10px;
  
        background-color: white;
        box-shadow: 0px 1px 3px lightgray;
        border-radius: 5px;

        overflow: hidden;
        transition: transform 0.5s;

        cursor: pointer;
        will-change: auto;
    }
    .list-item > .list-title{
        text-align: left;

        color: #409fff;
        font-size: 15px;

        margin: 0;
        padding-left: 20px;
        margin-top: 5px;
    }

</style>