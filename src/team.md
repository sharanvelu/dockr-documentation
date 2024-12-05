---
layout: doc
title: Team
description: Our dev team
aside: false
editLink: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/46478367',
    name: 'Sharan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/sharanvelu' },
      { icon: 'twitter', link: 'https://x.com/sharan_velusamy' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sharanvelu/' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
