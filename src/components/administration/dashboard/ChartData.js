

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
        plugins : pluginsTrue,
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
        // font: {
        //     weight: 'bold'
        // }
    }
}