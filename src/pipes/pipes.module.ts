import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { TodayPipe } from './today/today';
@NgModule({
	declarations: [SearchPipe,
    TodayPipe],
	imports: [],
	exports: [SearchPipe,
    TodayPipe]
})
export class PipesModule {}
