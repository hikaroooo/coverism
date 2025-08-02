#!/bin/bash
# coverism 자동 푸시 스크립트

# 프로젝트 폴더로 이동
cd ~/Desktop/coverism || exit

# 변경된 모든 파일 추가
git add .

# 커밋 메시지에 현재 날짜/시간 포함
git commit -m "자동 업데이트: $(date '+%Y-%m-%d %H:%M:%S')"

# 원격 저장소(main 브랜치)에 푸시
git push origin main
