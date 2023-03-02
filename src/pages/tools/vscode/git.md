---
title: vscode git 操作
---

## 丢掉已经commit,但是还未push的修改

### 原始操作

```bash
git reset --hard HEAD^
```

### vscode 操作

![git-drop](git-drop.png)

## 删除分支

![delete-branch](delete-branch.png)
![delete-branch2](delete-branch2.png)

## 将其他分支的单个提交放到当前分支

```bash
git cherry-pick <commit-id>
```

![cherry-pick](cherry-pick)
