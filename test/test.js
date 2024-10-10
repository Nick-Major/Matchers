import { characters, rateHealthStatus } from "../src/index";

test('the state of the players', () => {
    const result = rateHealthStatus(characters);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]);
});
