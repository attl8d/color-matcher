import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { hex } from 'color-convert';
import { ColorUtility, Utils } from './utils';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ColorItem {
  name: string;
  color: string;
  hsl?: HSL;
  textColor?: string;
  isStyleGuideColor?: boolean;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public Utils = Utils;
  public title = 'color-matcher';
  public sortByForm: FormGroup;
  public sortOptions = [
    {
      label: 'Hue',
      value: 'hsl.h',
    },
    {
      label: 'Saturation',
      value: 'hsl.s',
    },
    {
      label: 'Brightness',
      value: 'hsl.l',
    }
  ];

  public options: GridsterConfig = {
    gridType: 'fixed',
    fixedRowHeight: 100,
    // verticalFixed: true,
    draggable: {
      enabled: true
    },
    margin: 0,
  };
  public dashboard: GridsterItem[] = [];

  public colorsToMatch: ColorItem[] = [
    { isStyleGuideColor: true, name: 'color-primary', color: '#2638c4' },
    { isStyleGuideColor: true, name: 'color-medium-blue', color: '#0f1e8c' },
    { isStyleGuideColor: true, name: 'color-navy-blue', color: '#0a145a' },
    { isStyleGuideColor: true, name: 'color-midnight-blue', color: '#000525' },
    { isStyleGuideColor: true, name: 'color-lightest-grey', color: '#f6f6fa' },
    { isStyleGuideColor: true, name: 'color-light-grey', color: '#eef0f5' },
    { isStyleGuideColor: true, name: 'color-border-grey', color: '#d6d9da' },
    { isStyleGuideColor: true, name: 'color-darker-grey', color: '#656772' },
    { isStyleGuideColor: true, name: 'color-medium-slate-grey', color: '#60738a' },
    { isStyleGuideColor: true, name: 'color-white', color: '#fff' },
    { isStyleGuideColor: true, name: 'color-almost-white', color: '#f6f8fa' },
    { isStyleGuideColor: true, name: 'color-black', color: '#000' },
    { isStyleGuideColor: true, name: 'color-almost-black', color: '#262626' },
    { isStyleGuideColor: true, name: 'color-body-black', color: '#212529' },
    { isStyleGuideColor: true, name: 'color-medium-magenta', color: '#b2528c' },
    { isStyleGuideColor: true, name: 'color-dusty-rose', color: '#a31a51' },
    { isStyleGuideColor: true, name: 'color-teal', color: '#007b9b' },
    { isStyleGuideColor: true, name: 'color-light-blue', color: '#486cd8' },
    { isStyleGuideColor: true, name: 'color-red', color: '#d6383a' },
    { isStyleGuideColor: true, name: 'color-green', color: '#087b45' },
    { isStyleGuideColor: true, name: 'color-purple', color: '#6a1b9a' },
    { isStyleGuideColor: true, name: 'color-dark-teal', color: '#074d51' },
    { isStyleGuideColor: true, name: 'color-buttercup-yellow', color: '#ffcf00' },
    { name: 'backgroundGrey', color: '#bcbecf' },
    { name: 'darkGrey', color: '#6c757d' },
    { name: 'browseTitleBackground', color: '#e2e6ef' },
    { name: 'title', color: '#172073' },
    { name: 'headerDropdownLinkColor', color: '#32304f' },
    { name: 'buttonColorDisabled', color: '#c4c8ee' },
    { name: 'borderColorGrey', color: '#ebebeb' },
    { name: 'arrowolorHover', color: '#afafaf' },
    { name: 'subcollectionDefaultBackgroundColor', color: '#f8f8f8' },
    { name: 'unknown1', color: '#375bc6' },
    { name: 'unknown2', color: '#0c3c36' },
    { name: 'unknown3', color: '#333333' },
    { name: 'unknown4', color: '#f6f6f6' },
    { name: 'unknown5', color: '#eef4f4' },
    { name: 'unknown6', color: '#46b8da' },
    { name: 'unknown7', color: '#e68a00' },
    { name: 'unknown8', color: '#e1e1e1' },
    { name: 'unknown9', color: '#353d46' },
    { name: 'unknown10', color: '#738496' },
    { name: 'unknown11', color: '#d7d7d7' },
    { name: 'unknown12', color: '#566271' },
    { name: 'unknown13', color: '#dce0e5' },
    { name: 'unknown14', color: '#e4e5eb' },
    { name: 'unknown15', color: '#2f50be' },
    { name: 'unknown16', color: '#76b93c' },
    { name: 'unknown17', color: '#39b3d7' },
    { name: 'unknown18', color: '#011627' },
    { name: 'unknown19', color: '#5d5d5d' },
    { name: 'unknown20', color: '#979797' },
    { name: 'unknown21', color: '#ff0000' },
    { name: 'unknown22', color: '#fe704e' },
    { name: 'unknown23', color: '#04155f' },
    { name: 'unknown24', color: '#2d3a59' },
    { name: 'unknown25', color: '#269abc' },
    { name: 'unknown26', color: '#5bc0de' },
    { name: 'unknown27', color: '#999' },
    { name: 'unknown28', color: '#f6f6f3' },
    { name: 'unknown29', color: '#eef2ff' },
    { name: 'unknown30', color: '#f6f5f6' },
    { name: 'unknown31', color: '#ffcf00' },
    { name: 'unknown32', color: '#0f1d49' },
    { name: 'unknown33', color: '#ca2027' },
    { name: 'unknown34', color: '#e3e3e9' },
    { name: 'unknown35', color: '#3259c3' },
    { name: 'unknown36', color: '#262626' },
    { name: 'unknown37', color: '#cacaca' },
    { name: 'unknown38', color: '#cecece' },
    { name: 'unknown39', color: '#aeaeae' },
    { name: 'unknown40', color: '#dee2e6' },
    { name: 'unknown41', color: '#d8ddec' },
    { name: 'unknown42', color: '#e5e5e5' },
    { name: 'unknown43', color: '#e1e5e9' },
    { name: 'unknown44', color: '#ab3a1e' },
    { name: 'unknown45', color: '#2a6496' },
    { name: 'unknown46', color: '#bcbece' },
    { name: 'unknown47', color: '#31365f' },
    { name: 'unknown48', color: '#c4cbd4' },
    { name: 'unknown49', color: '#02146a' },
    { name: 'unknown50', color: '#f1f1f1' },
    { name: 'unknown51', color: '#f6f6f4' },
    { name: 'unknown52', color: '#3a579d' },
    { name: 'unknown53', color: '#e8e9f2' },
    { name: 'unknown54', color: '#f7f6f3' },
    { name: 'unknown55', color: '#475769' },
    { name: 'unknown56', color: '#dddddd' },
    { name: 'unknown57', color: '#4b5cdd' },
    { name: 'unknown58', color: '#1da1f2' },
    { name: 'unknown59', color: '#65a205' },
    { name: 'unknown60', color: '#d81b60' },
    { name: 'unknown61', color: '#fefefe' },
    { name: 'unknown62', color: '#af2220' },
    { name: 'unknown63', color: '#bcbed0' },
    { name: 'unknown64', color: '#4a4a4a' },
    { name: 'unknown65', color: '#f6f7f8' },
    { name: 'unknown66', color: '#c9f1f4' },
    { name: 'unknown67', color: '#ffd800' },
    { name: 'unknown68', color: '#48d3cd' },
    { name: 'unknown69', color: '#556271' },
    { name: 'unknown70', color: '#444444' },
    { name: 'unknown71', color: '#e7ebf9' },
    { name: 'unknown72', color: '#777' },
    { name: 'unknown73', color: '#a2a2a2' },
    { name: 'unknown74', color: '#5c6e85' },
    { name: 'unknown75', color: '#a9a9a9' },
    { name: 'unknown76', color: '#efefef' },
    { name: 'unknown77', color: '#f2f2f2' },
    { name: 'unknown78', color: '#cccccc' },
    { name: 'unknown79', color: '#757575' },
    { name: 'unknown80', color: '#d1d6dc' },
    { name: 'unknown81', color: '#3b5998' },
    { name: 'unknown82', color: '#dc3545' },
    { name: 'unknown83', color: '#f0f0f0' },
    { name: 'unknown84', color: '#eaebeb' },
    { name: 'unknown85', color: '#eef0f5' },
  ];

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.sortByForm = this.fb.group({
      firstSort: this.sortOptions[0].value,
      secondSort: this.sortOptions[1].value,
      thirdSort: this.sortOptions[2].value,
    });

    this.sortByForm.valueChanges.subscribe((val) => {
      let y = 0;
      let x = 0;
      this.colorsToMatch = _.orderBy(this.colorsToMatch, [val.firstSort, val.secondSort, val.thirdSort]) as any;

      this.dashboard = [];
      this.colorsToMatch.forEach((i) => {
        this.dashboard.push({
          cols: 1, rows: 1, x, y
        });

        if (x === 4) {
          x = 0;
          y++;
        } else {
          x++;
        }
      });
    });

    this.initColors();
  }

  private initColors(): void {
    let y = 0;
    let x = 0;
    this.colorsToMatch = this.colorsToMatch.map((i, index) => {
      i.textColor = ColorUtility.isLight(i.color) ? '#00000080' : '#ffffff47';
      const hsl = hex.hsl(i.color);
      i.hsl = {
        h: hsl[0],
        s: hsl[1],
        l: hsl[2]
      };

      return i;
    });
    this.colorsToMatch = _.orderBy(this.colorsToMatch, ['hsl.h', 'hsl.s', 'hsl.l']);

    this.colorsToMatch.forEach((i) => {
      this.dashboard.push({
        cols: 1, rows: 1, x, y
      });

      if (x === 4) {
        x = 0;
        y++;
      } else {
        x++;
      }
    });
  }

  // public onFileChange(event: any): void {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const result = JSON.parse(event.target.result);
  //     console.log('result', result);
  //   };
  //   reader.readAsText(event.target.files[0]);
  // }
}
