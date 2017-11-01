import { StateService } from './StateService';

describe("AStateService", () => {

    let service: StateService;

    beforeEach(()=>{
        service = new StateService();
    });

    it("should store state", () => {

        let name = "test";
        let value = 0;
        
        service.set(name, value);

        let result = service.getSubject<number>(name);

        expect(result).not.toBeNull();
    });

    it("should get value", () => {

        let name = "test";
        let value = 0;
        
        service.set(name, value);

        let result = service.getValue<number>(name);

        expect(result).toBe(value);
    });
});
