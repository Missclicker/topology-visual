export const nodeHtmlLabelConfig = [
  {
    query: 'node',
    halign: 'center',
    valign: 'center',
    halignBox: 'center',
    valignBox: 'center',
    tpl: (data) => {
      return `
        <div style="text-align: center; font-family: sans-serif;">
          <div style="font-weight: bold; font-size: 14px;">${data.hostname}</div>
          <div style="font-size: 12px;">${data.ipv4}</div>
          <div style="font-size: 12px;">SID: ${data.sid}</div>
        </div>
      `;
    }
  }
]; 