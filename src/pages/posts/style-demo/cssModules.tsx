import React, { useState } from 'react';
import { MainLayout } from "src/layouts/main/index";
import styles from './cssModules.module.css';

export default function cssModulesDemo() {
  return (
    <>
      <MainLayout>
        <h2>CSS Modulesによるスタイリング</h2>
        <button className={styles.btn}>ボタン</button>
        <hr className={styles.hr}></hr>
      </MainLayout>
    </>
  )
}