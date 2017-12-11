const elementResizeDetectorMaker = require('element-resize-detector');

const erd = elementResizeDetectorMaker({
  strategy: 'scroll'
});

class ResizeService {
  public listenTo(el: Element, onChange: (dimension: ({ width: number, height: number })) => void) {
    erd.listenTo(el, (element: Element) => {
      onChange({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    });
  }
}

export const resizeServie = new ResizeService();