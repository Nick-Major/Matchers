export const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

export function rateHealthStatus(arr) {
    arr.sort(function(a, b) {
        return b.health - a.health;
    })

    return arr;
}
