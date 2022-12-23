
window.onload = init;
function init(){
  const map=new ol.Map({
    view: new ol.View({
      center: [ -4282305.107287579, -1449083.7608776242 ],
      zoom:12,
      setmaxZoom:19,
      setminZoom:10
        
    }),
   layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: "js-map"
  })
  const openStreetStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title:'OSMStandard'
  }) 

  const openStreetMapHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
      url:'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    }),
    visible: true,
    title:'OSMHumanitarian'
  })  
  const StamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url:'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      atributions:'Map tiles by <a href="http://stamen.com">Stamen Desing</a>, under'
    }),
    visible: true,
    title:'StamenTerrain'
  }) 
  const baseLayerGroup = new ol.layer.Group({
    layers:[
      openStreetStandard,openStreetMapHumanitarian,StamenTerrain
    ]
  })
  map.addLayer(baseLayerGroup);
  // Layer Swicher
  const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio');
    for (let baseLayerElement of baseLayerElements){
      baseLayerElement.addEventListener('change', function(){
        let baseLayerElementValue = this.value;
           baseLayerGroup.getLayers().forEach(function(element,index,array){
            let baseLayerTitle = element.get('title');
            element.setVisible(baseLayerTitle===baseLayerElementValue)
          })
      })
    }
  }