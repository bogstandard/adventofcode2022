i.split('\n\n')
    .map(ii => ii.split('\n')
        .reduce((a, b) => ~~a + ~~b, 0))
    .sort((a, b) => a-b)
    .slice(-3)
    .reduce((a, b) => a + b, 0)