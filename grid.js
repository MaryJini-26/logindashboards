jQuery(document).ready(function () {
    var mydata = [
        {id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        {id:"2",invdate:"2007-10-02",name:"test2",note:"note",amount:"300.00",tax:"20.00",total:"320.00"},
        {id:"3",invdate:"2007-09-01",name:"test3",note:"note",amount:"400.00",tax:"30.00",total:"430.00"},
        {id:"4",invdate:"2007-10-04",name:"test4",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        {id:"5",invdate:"2007-10-05",name:"test5",note:"note",amount:"300.00",tax:"20.00",total:"320.00"},
        {id:"6",invdate:"2007-09-06",name:"test6",note:"note",amount:"400.00",tax:"30.00",total:"430.00"},
        {id:"7",invdate:"2007-10-04",name:"test7",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        {id:"8",invdate:"2007-10-03",name:"test8",note:"note",amount:"300.00",tax:"20.00",total:"320.00"},
        {id:"9",invdate:"2007-09-01",name:"test9",note:"note",amount:"400.00",tax:"30.00",total:"430.00"},
        {id:"10",invdate:"2007-09-08",name:"test10",note:"note",amount:"500.00",tax:"30.00",total:"530.00"},
        {id:"11",invdate:"2007-09-08",name:"test11",note:"note",amount:"500.00",tax:"30.00",total:"530.00"},
        {id:"12",invdate:"2007-09-10",name:"test12",note:"note",amount:"500.00",tax:"30.00",total:"530.00"}
    ];
    var grid = $("#newGrid");
    grid.jqGrid({
        datatype: "local",
        data: mydata,
        colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
        colModel:[
            {name:'id',index:'id', width:125, sorttype: "int", editable:false,editoptions:{readonly:true,size:10}},
            {name:'invdate',index:'invdate', width:120,editable:true,align:'center',
             sorttype:'date', formatter:'date', datefmt:'d/m/Y'},
            {name:'name',index:'name', width:120,editable:true,editoptions:{size:25}},
            {name:'amount',index:'amount', width:120, align:"right",editable:true,editoptions:{size:10}},
            {name:'tax',index:'tax', width:120, align:"right",editable:true,editoptions:{size:10}},
            {name:'total',index:'total', width:120,align:"right",editable:true,editoptions:{size:10}},
            {name:'note',index:'note', /*hidden:true,*/ width:100, sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"20"}}
        ],
        rowNum:10,
        rowList:[5,10,15],
        pager: '#pager',
        //multiselect:true,
        //subGrid:true,
        //rownumbers:true,
        sortname: 'id',
        loadComplete: function() {
            // 2 is zero-base index of the column 'name' ('Client'). Every from the options
            // multiselect:true, rownumbers:true and subGrid:true will increase
            // the index by 1 because the option inserts additional columns
            $("#6 td:eq(2)", grid[0]).css({color:'red'});

            grid.jqGrid('setCell',"12","name","",{color:'red'});
            grid.jqGrid('setCell',"10",'name', '', 'my-highlight');
            grid.jqGrid('setCell',"8",'name', '', 'ui-state-error ui-state-error-text');

            grid.jqGrid('setCell',"4","name","",{'background-color':'yellow', 'background-image':'none'});
            grid.jqGrid('setCell',"3","name","",'ui-state-highlight');
        },
        viewrecords: true,
        sortorder: "desc",
        caption:"Different ways to set the color of the cell",
        height: 'auto',
        width:'100%'
    });
});