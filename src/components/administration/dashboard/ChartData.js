import Chart from 'chart.js'

export const PieOptions = ()=>{
    return {
        legend : pieLegend,
        plugins : pluginsFalse,
        tooltips : tooltips,
    }
}
export const BarOptions = ()=>{
    return {
        legend : barLegend,
        plugins : pluginsTrue,
        tooltips : tooltips,
        scales : scales,
    }
}
export const SidebarOptions = ()=>{
    return {
        legend : {
            display:false
        },
        plugins : Sidebarplugin,
        tooltips : tooltips,
        scales : scales,
    }
}

const tooltips = {
    titleSpacing: 6,
    xPadding: 20,
    yPadding: 20,
    titleFontSize: 15,
    bodyFontSize: 20,
    callbacks: {
        title: function (tooltipItem, data) {
            return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']];
        },
    },
}
const scales= {
    xAxes: [{
        gridLines: {
            display: false
        },
    }],
    yAxes: [{
        gridLines: {
            display: false
        },
        ticks: {
            beginAtZero: true,
            fontSize: 15,
            minimum: 20,
        },
    }]
}
const pieLegend = {
    position: 'left',
    padding: 10,
    labels: {
        fontSize: 13,
        fontColor: "black",
    }
}
const barLegend= {
    labels: {
        fontSize: 23,
        boxWidth: 30,
        fontFamily: 'Times New Roman',
    }
}

const pluginsFalse = {
    datalabels: {
        display: false
    }
}
const pluginsTrue= {
    datalabels: {
        align: 'top',
        anchor: 'end',
        rotation:270,
        // rotation: function(ctx){
        //     return ctx.datasets.data[ctx.dataIndex] * 25;
        // }
        // font: {
        //     weight: 'bold'
        // }
    }
}
const Sidebarplugin= {
    datalabels: {
        align: 'right',
        anchor: 'end',
       
        // rotation: function(ctx){
        //     return ctx.datasets.data[ctx.dataIndex] * 25;
        // }
        // font: {
        //     weight: 'bold'
        // }
    }
}
const animation={
    onComplete: function () {
        var chartInstance = this.chart;
        var ctx = chartInstance.ctx;
        // ctx.textAlign = "center";
        // ctx.font = "bold 25px Arial";
        // ctx.fillStyle = "white";
        ctx.translate(0,1000);
        ctx.rotate(-0.5*Math.PI);
        Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            Chart.helpers.each(meta.data.forEach(function (bar, index) {
                ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - 36);
            }),this)
        }),this);
    }
}