// script.js
function graphFunction() {
    const expression = document.getElementById('function').value;

    // Generate the x values and corresponding y values
    const xValues = [];
    const yValues = [];
    for (let x = -10; x <= 10; x += 0.1) {
        try {
            // Evaluate the function at the current x value
            const y = math.evaluate(expression, {x: x});
            xValues.push(x);
            yValues.push(y);
        } catch (error) {
            document.getElementById('graph').innerHTML = 'Error evaluating the function. Please check your input.';
            return;
        }
    }

    // Plot the graph using Plotly
    const trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        name: 'Function',
    };

    const layout = {
        title: `Graph of: ${expression}`,
        xaxis: { title: 'x' },
        yaxis: { title: 'y' },
    };

    Plotly.newPlot('graph', [trace], layout);
}
