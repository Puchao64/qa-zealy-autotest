import { test, expect } from '@playwright/test';

test('Zealy: подключение и возврат через goBack + General', async ({ page }) => {
  // Step 1: открыть главную страницу
  await test.step('Открытие главной страницы', async () => {
    await page.goto('https://zealy.io/cw/ztx/questboard/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'screenshots/zealy/step1_main.png' });
  });

  // Step 2: открыть миссию Join ZTX Discord
  await test.step('Открытие миссии', async () => {
    const missionCard = page.locator('text=Join the ZTX Discord server').first();
    await missionCard.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/zealy/step2_mission_open.png' });
    await expect(page.locator('text=MISSION')).toBeVisible();
  });

  // Step 3: клик по Connect to Zealy
  await test.step('Подключение Zealy', async () => {
    await page.click('text=Connect to Zealy');
    await page.waitForURL('**/signup?subdomain=ztx', { timeout: 5000 });
    await page.screenshot({ path: 'screenshots/zealy/step3_connect.png' });
    await expect(page.locator('text=Welcome to Zealy')).toBeVisible();

    // Возврат назад в задание
    await page.goBack();
    await page.waitForTimeout(1000);
  });

  // Step 4: нажать General для выхода на главную
  await test.step('Возврат через вкладку General', async () => {
    await page.click('text=General');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'screenshots/zealy/step4_back_to_main.png' });
  });

  // Step 5: перейти во вкладку Sprint и сделать скриншот
  await test.step('Вкладка Sprint', async () => {
    await page.click('text=Sprint');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'screenshots/zealy/step5_sprint.png' });

    const shareZtx = page.locator('text=SHARE ZTX');
    const count = await shareZtx.count();

    if (count === 0) {
      console.warn('SHARE ZTX not found. UI may not be fully loaded.');
    } else {
      const isVisible = await shareZtx.first().isVisible();
      console.log(`SHARE ZTX found. Visible: ${isVisible}`);
    }
  });

  // Step 6: Вернуться на главную после Sprint
  await test.step('Возврат на главную после Sprint', async () => {
    await page.click('text=General');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'screenshots/zealy/step6_back_to_main_after_sprint.png' });
  });

  // Step 7: Перейти во вкладку Vote
  await test.step('Переход во вкладку Vote', async () => {
    await page.click('text=Vote');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'screenshots/zealy/step7_vote.png' });

    const voteText = page.locator('text=Oops, it seems there are no quests');
    await expect(voteText).toBeVisible({ timeout: 5000 });
  });

  // Step 8: Возврат на главную после Vote
  await test.step('Возврат на главную после Vote', async () => {
    await page.click('text=General');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'screenshots/zealy/step8_back_to_main_after_vote.png' });
  });
});
