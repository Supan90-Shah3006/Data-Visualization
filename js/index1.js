const log = console.log;

const chartProperties = {
  width:1100,
  height:800,
  timeScale:{
    timeVisible:true,
    secondsVisible:false,
  }
}

const domElement = document.getElementById('tvchart');
const chart = LightweightCharts.createChart(domElement,chartProperties);
const candleSeries = chart.addCandlestickSeries()

const socket = io.connect('http://127.0.0.1:4000/');

socket.on('KLINE',(pl)=>{
  log(pl);
  candleSeries.update(pl);
});
