export interface IGlobalConfig {
	PORT: number;
	DB: {
		HOST: string;
		PORT: number;
		NAME: string;
		URL: string;
	}
}

export const CONFIG:IGlobalConfig = {
	PORT: 8080,
	DB: {
		HOST: 'localhost',
		PORT: 27017,
		NAME: 'test',
		get URL () { return `mongodb://${this.HOST}:${this.PORT}/${this.NAME}` }
	}
};