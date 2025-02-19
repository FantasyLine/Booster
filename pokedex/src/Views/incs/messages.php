<?php if ($this->error) { ?>
    <div class="alert error"><?= htmlspecialchars($this->error); ?></div>
<?php } ?>

<?php if ($this->message) { ?>
    <div class="alert success"><?= htmlspecialchars($this->message); ?></div>
<?php } ?>