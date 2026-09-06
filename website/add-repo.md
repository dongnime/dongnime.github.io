---
# SPDX-License-Identifier: Apache-2.0
title: "Add repository"
description: "Add Dongnime repository to Aniyomi / Anikku"
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { GITHUB_EXTENSION_MIN_JSON, GITHUB_EXTENSION_JSON, JSDELIVR_EXTENSION_PB } from "./.vitepress/config/constants";

    const isAndroid = ref(true);
    const url = ref(GITHUB_EXTENSION_MIN_JSON);
    const officialRepos = [GITHUB_EXTENSION_MIN_JSON, GITHUB_EXTENSION_JSON, JSDELIVR_EXTENSION_PB];

    onMounted(() => {
        isAndroid.value = !!navigator.userAgent.match(/android/i);
        const searchParams = new URLSearchParams(window.location.search);
        const urlParm = searchParams.get("url") || GITHUB_EXTENSION_MIN_JSON;
        const appParm = (searchParams.get("app") || "").toLowerCase();
        const encodedUrl = encodeURIComponent(urlParm);

        if (!officialRepos.includes(urlParm)) {
            window.location.replace("/");
            return;
        }

        url.value = urlParm;

        if (isAndroid.value) {
            window.goatcounter?.count?.({
                path: `/#add-to-${appParm || 'aniyomi'}`,
                title: "Add extension repository",
            });

            const scheme = appParm === "anikku" ? "anikku" : "aniyomi";
            window.location.replace(`${scheme}://add-repo?url=${encodedUrl}`);
        }
    });
</script>

<div v-if="isAndroid" class="custom-block tip">
    <p class="custom-block-title">🚀 Opening App</p>
    <p>Opening your app automatically... If it does not launch, tap one of the buttons below:</p>
</div>
<div v-else class="custom-block warning">
    <p class="custom-block-title">⚠️ Android Device Required for One-Click</p>
    <p>Aniyomi and Anikku are Android applications. Please open this page from your Android device, or copy the repository URL below into your app manually.</p>
</div>

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0;">
    <a :href="`aniyomi://add-repo?url=${encodeURIComponent(url)}`" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 8px; background: #3b82f6; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px;">
        📲 Add to Aniyomi
    </a>
    <a :href="`anikku://add-repo?url=${encodeURIComponent(url)}`" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 8px; background: #8b5cf6; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px;">
        📲 Add to Anikku
    </a>
</div>

<div class="custom-block info" style="margin-top: 24px;">
    <p class="custom-block-title">📋 Manual Repository URL</p>
    <p>In Aniyomi / Anikku: <strong>Settings → Browse → Anime extension repos → +</strong></p>
    <pre style="margin-top: 8px; overflow-x: auto;"><code>{{ url }}</code></pre>
</div>

