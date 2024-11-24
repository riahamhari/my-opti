/**
Developed by: Riah
Test name: Test 152  - VIP Discount Modal v1
**/
(() => {
    'use strict';
    const myInterval = setInterval(() => {
        const myElement = document.querySelector('selector');
        if (myElement) {
            clearInterval(myInterval);
        }
    }, 300);
    // go to tuning starter package incog and scroll down and wait
    // in class make modal show
    const modalHtml = `<div id="guaranteeModalParent">
    <div class="modal fade info-modal in" id="guaranteeModal" tabindex="-1" role="dialog" aria-hidden="false" style="display: flex;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <span class="info-modal-cross" data-dismiss="modal">×</span>
                    <h2 class="info-modal-heading">Not sure if this course is right for you?</h2>
                    <p>Our courses are <i>expertly</i> designed to:</p>
                    <div class="info-modal-content">
                        <div class="info-modal-item">
                            <div class="info-modal-image">
                                <img src="/resources/themes/base/production/images/guarantee-modal-yoda.png" alt="">
                            </div>
                            <p>Master the core principles</p>
                        </div>
                        <div class="info-modal-item">
                            <div class="info-modal-image">
                                <img src="/resources/themes/base/production/images/guarantee-modal-route.png" alt="">
                            </div>
                            <p>Appeal to both beginners &amp; experts </p>
                        </div>
                        <div class="info-modal-item">
                            <div class="info-modal-image">
                              <img src="/resources/themes/base/production/images/guarantee-modal-snap.png" alt="">
                            </div>
                            <p>Be fun and easy to understand</p>
                        </div>
                    </div>
                    <p class="info-modal-bottomtext">If you're still unsure, enrol anyway. If it's not for you, simply tell us and <strong>we'll quickly refund every cent.</strong> It's that easy</p>
                    <a class="btn btn-primary info-modal-btn" data-dismiss="modal">OK, GOT IT</a>
                </div>
            </div>
        </div>
    </div>
</div>`;
    setTimeout(function () {
        if (myInterval) {
            clearInterval(myInterval);
        }
    }, 15000);
})();

