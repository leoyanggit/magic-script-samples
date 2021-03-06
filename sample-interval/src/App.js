import { ui, LandscapeApp } from 'lumin';
const { UiText, EclipseLabelType, Alignment, HorizontalTextAlignment } = ui;

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function start (app) {
  let prism = app.requestNewPrism([0.4, 0.1, 0.1]);
  let text = UiText.CreateEclipseLabel(
    prism,
    'There are no mistakes.',
    EclipseLabelType.kT3
  );
  text.setAlignment(Alignment.CENTER_CENTER);
  text.setTextAlignment(HorizontalTextAlignment.kCenter);

  prism.getRootNode().addChild(text);
  setInterval(async () => {
    text.setText('Only');
    await sleep(500);
    text.setText('Only happy');
    await sleep(500);
    text.setText('Only happy little');
    await sleep(500);
    text.setText('Only happy little accidents!');
  }, 5000);
  return prism;
}
