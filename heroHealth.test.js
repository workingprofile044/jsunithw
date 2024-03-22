import { getHeroHealthStatus } from './heroHealth';

describe('getHeroHealthStatus', () => {
    it('returns "healthy" when health is more than 50', () => {
        const hero = { name: 'Маг', health: 90 };
        expect(getHeroHealthStatus(hero)).toEqual('healthy');
    });

    it('returns "wounded" when health is between 50 and 15', () => {
        const hero = { name: 'Маг', health: 30 };
        expect(getHeroHealthStatus(hero)).toEqual('wounded');
    });

    it('returns "critical" when health is less than 15', () => {
        const hero = { name: 'Маг', health: 10 };
        expect(getHeroHealthStatus(hero)).toEqual('critical');
    });
});
