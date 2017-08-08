<div id="toolbar">
    <button class="btn btn-default query">查询</button>
    <button class="btn btn-default add">新增</button>
    <button class="btn btn-default edit">修改</button>
    <button class="btn btn-default delete">删除</button>
</div>

<div id="table" data-toolbar="toolbar"></div>

<%--
<script>
    $('#table').bootstrapTable({
        locale: 'zh-CN',
        columns: [
            {field: 'select', checkbox:true, width: 80}
            ,{title: '#', field: 'id', align: 'center', width: 100}
            ,{title: '姓名', field: 'name', align: 'center', width: 100}
            ,{title: '性别', field: 'sex', align: 'center', width: 80}
            ,{title: '籍贯', field: 'loc', align: 'center', width: 200}
        ],
        data: [{id:1, name: '张三', sex:1, loc: '湖北武汉'}],
        striped:true,
        clickToSelect:true
    });
</script>
--%>