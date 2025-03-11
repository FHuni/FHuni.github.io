// Sample data for the bar chart
const sampleData = [
    {"category": "A", "value": 28},
    {"category": "B", "value": 55},
    {"category": "C", "value": 43},
    {"category": "D", "value": 91},
    {"category": "E", "value": 81},
    {"category": "F", "value": 53}
];

// Vega-Lite specification for a bar chart
const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart showing population of different categories",
    width: 500,
    height: 300,
    data: {
        "values": sampleData
    },
    mark: {
        type: "bar"
    },  
    encoding: {
        x: {
            "field": "category",
            "type": "nominal",
            "title": ""
        },
        y: {
            "field": "value",
            "type": "quantitative",
            "title": ""
        }
    }    
};

// Embed the visualization in the container
vegaEmbed("#vis", spec)