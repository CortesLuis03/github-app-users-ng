import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
    exports:[
        NzLayoutModule,
        NzButtonModule,
        NzSelectModule,
        NzGridModule,
        NzSpaceModule,
        NzCardModule,
        NzAvatarModule,
        NzIconModule,
        NzTypographyModule,
        NzImageModule,
        NzListModule
    ]
})

export class NgZorroAntdModule {

}
